const biodata={
  id:1,
  nama:"Anisa Alawiyah",
  born:"17 juli 2003",
  age:"20 Tahun",
  hobies:["makan","olaraga","main"],
  images:"./image.jpeg"

}

export default function App(){
  return(
    <>
    <div className="container-1">
    <div className="container">
      <h1>Tugas 1 kelompok Galaksi</h1>
    <div className="bungkus">
    <h2 className="h1">Biodata</h2>
    <img src={biodata.images} alt="" className="img" />
    <p>{biodata.nama}</p>
    <p>{biodata.born}</p>
    <p>{biodata.age}</p>              
    
  {biodata.hobies.map((hobi,index)=>(
    <button key={index} className="hobby">
      {hobi}
    </button>
  )
  )}
    </div>
    </div>
    </div>


    </>
  )
}