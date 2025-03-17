import Image from 'next/image';
import yinYang from '../../public/yinYang.png'

export default function HelloMonk() {
    return (
        <div>
            <div className="flex items-center justify-center min-h-screen">
                <div className="flex flex-col items-center bg-gray-800 p-6 rounded-md">
                    <p className="text-xl font-bold">Hello from Monk</p>
                    <p className="text-l align-center">ScrapeCore</p>
                    <Image
                        src={yinYang} // Path to your image (relative or URL)
                        alt="Description of the image"
                        width={200}  // The width of the image
                        height={200} // The height of the image
                        quality={75} // Optional: Image quality (default is 75)
                    />
                    <div className="bg-blue-500 bg-blue-200 bg-cover bg-center">
                        <h1 className="text-white text-4xl font-bold text-center p-16"></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
