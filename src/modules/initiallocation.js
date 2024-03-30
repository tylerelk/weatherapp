export default async function InitialLocation() {
    function getCoords() {
        return new Promise((resolve, reject) =>
            navigator.geolocation.getCurrentPosition(resolve, reject)
        );
    };
    const result = async () => {
        try {
            let position = await getCoords();
            return {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }
        } catch (error) {
            console.log(error.message);
        }
    };
    return result();
}
