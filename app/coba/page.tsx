export default function CobaPage() {
    return (
        <div className="bg-gray-300 h-screen flex justify-center items-center">

            <div className="bg-white h-78 w-65 rounded-xl flex flex-col gap-4 p-2">
                <div className="bg-blue-200 h-60 w-61 flex flex-col p-5 gap-3 rounded-xl">
                    <h1 className="font-bold text-2xl">Web Design</h1>
                    <p className="text-xs font-bold">Crafts engaging, user-friendly websites.</p>
                    <div className="flex flex-wrap gap-3">
                        <div className="bg-blue-300 h-6 w-24 flex rounded-full items-center justify-center">
                        <p className="text-xs font-semibold">Landing Page</p>
                        </div>
                        <div className="bg-blue-300 h-6 w-18 flex rounded-full items-center justify-center">
                        <p className="text-xs font-semibold">Website</p>
                        </div>
                        <div className="bg-blue-300 h-6 w-18 flex rounded-full items-center justify-center">
                        <p className="text-xs font-semibold">One Page</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between p-3">
                    <h2 className="font-bold">Explore</h2>
                    <div className="bg-gray-200 h-8 w-8 flex justify-center items-center rounded-xl">
                        <img src="/Kanan.svg" className="h-7 w-7"/>
                    </div>
                </div>
            </div>

        </div>
    )
}