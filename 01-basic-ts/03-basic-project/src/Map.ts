
export interface Mappable {
    location: {
        lat: number;
        lng: number;
    }
    content?: string
}

export class Map {

    private googleMap: google.maps.Map;

    constructor(elId: string) {
        this.googleMap = new google.maps.Map(
            document.getElementById(elId),
            {
                zoom: 1,
                center: {
                    lat: 0,
                    lng: 0
                },
            })
    }
    addMarker(mappable: Mappable) {
        const { location: { lat, lng } } = mappable
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: lat,
                lng: lng
            }
        })
        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.content || 'Hi Info Window'
            })
            infoWindow.open(this.googleMap, marker)
        })
    }
}