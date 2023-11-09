 const tags = [
    {
    id: 1,
    name: 'Agreements'
},
{
    id: 2,
    name: 'Rights and justice'
},
{
    id: 3,
    name: 'Consumer Protection'
},
{
    id: 4,
    name: 'Local right'
},
{
    id: 5,
    name: 'Accident'
},
{
    id: 6,
    name: 'Compensation'
},

{
    id: 7,
    name: 'Personal Injury'
},
{
    id: 8,
    name: 'Labour law'
},
]


const PopularTags = () => {
    const tag = tags.map((item)=> (
        
		<div key={item.id} className="flex-1 border border-slate-100 lg:px-6 md:px-2 py-2 text-medium rounded-lg m-1 md:m-2 hover:bg-primary hover:text-white w-fit cursor-pointer transition-all duration-300  ease-in-out">
			<p className="w-fit">{item.name}</p>
		</div>
       
        
    ))

  return (
    <div className="grid md:grid-cols-1 grid-cols-2 lg:grid-cols-2 w-full items-center ">
        {tag}
        </div>
  )
}
export default PopularTags