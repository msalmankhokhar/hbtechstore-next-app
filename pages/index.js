import Image from "next/image";

export default function Home() {
  return (
    <div className="container px-5 py-10 mx-auto flex flex-col items-center">
      <h1 className="text-lg font-bold text-red-500">HB Tech Store</h1>
      <p className="text-base font-light">(Comming soon)</p>
      <div className="flex flex-col gap-2 my-3">
        <Image src={'/img/bonga.jpg'} width={200} height={600} alt="Junaid bonga"/>
        <div>
          <h2 className="text-sm text-gray-600">Website ka Malik:</h2>
          <div>
            <div className="font-bold text-lg">Mirza Junaid Husnain</div>
            <div className="font-semibold text-gray-700">{`(urf "Bonga")`}</div>
          </div>

        </div>
      </div>
    </div>
  );
}
