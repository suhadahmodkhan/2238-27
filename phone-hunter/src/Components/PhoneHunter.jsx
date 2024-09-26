import { useEffect, useState } from "react"

const PhoneHunter = () => {
    const [searchText, setSearchText] = useState('')
    const [phones, setPhones] = useState([])
    const [ showAll, setShowAll] = useState(true)
    useEffect(() => {
      
    },[])
     console.log(phones)
    const handleSearch = () => {
        fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(response => response.json())
        .then(data => {
            let phones = data.data ;
           
            if(phones.length > 9 ){
                setShowAll(false)
            }
            phones = phones.slice(0,9)
            
            setPhones(phones)
        })
    }
   
    const handleShowAll = () => {
        fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(response => response.json())
        .then(data => {
            let phones = data.data ;
            setShowAll(true)
            setPhones(phones)
        })
    }
    return (
        <>
        <h1>This is phone hunter </h1>
        <div className="flex gap-5  justify-center my-20">
            <input type="text" className="border-2 border-black pl-2" onChange={(e) => setSearchText(e.target.value)} />
            <button className="btn btn-primary" onClick={handleSearch}>Search</button>

          
        </div>
        phones.map()
        <div className="grid grid-cols-3 gap-5">
                {
                    phones.map(phone => <div key={phone.slug}>
                        {console.log(phone)}
                       <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={phone.image}
      alt="Shoes" />
  </figure>
  <div className="card-body flex flex-col justify-center">
    <h2 className="card-title text-center flex justify-center">{phone.phone_name}</h2>
    <p>There are many variations of passages of available, but the majority have suffered</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Show Details</button>
    </div>
  </div>
</div>
                        <h1></h1>

                    </div>)
                }
            </div>
            <button className={`btn btn-success mt-5 text-white ${ showAll === true ? 'hidden': 'inline'}`} onClick={handleShowAll}>Show All</button>
        </>
    )
}

export default PhoneHunter