import {BiChevronRight} from 'react-icons/bi'
const cat = [
    {
        id: 1,
        name: 'Real Estate Dispute',
    },
    {
        id: 2,
        name: 'Employment Discrimination',
    },
    {
        id: 3,
        name: 'Consumer Protection',
    },
    {
        id: 4,
        name: 'Personal Injury',
    },
    {
        id: 5,
        name: 'Labour & Employment',
    },
]



const PostCat = () => {
    const Category = cat.map((item)=> (
		<div key={item.id} className="flex justify-between w-10/12  gap-10 items-center  border border-slate-100 px-6 py-4 text-medium rounded-lg m-2 cursor-pointer hover:border-primary hover:border hover:bg-slate-100">
			<p className="w-fit">{item.name}</p>
            <BiChevronRight />
		</div>
    ))
            
  return (
    <>
  {Category}
    </>
  )
}

export default PostCat