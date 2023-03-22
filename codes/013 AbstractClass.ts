abstract class TakePhoto {
    
    private photoID: string;

    constructor(photoID: string){

        this.photoID = photoID;
    }

    abstract onClick(): void
}

/*
const photo = new TakePhoto();
*/

class Camera extends TakePhoto{
    
    onClick(): void {
        console.log("Clicked");
    }
}

const photo = new Camera("ip55");

photo.onClick();