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
        
		<div key={item.id} className="flex-1 border border-slate-100 px-6 py-1 text-medium rounded-lg m-2 cursor-pointer hover:bg-primary hover:text-white w-fit">
			<p className="w-fit">{item.name}</p>
		</div>
       
        
    ))

  return (
    <div className="grid grid-cols-2 w-full items-center ">
        {tag}
        </div>
  )
}
export default PopularTags