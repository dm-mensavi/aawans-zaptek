import {BiChevronRight} from 'react-icons/bi'
import {Link} from 'react-router-dom'

const blogCategories = [
    {
        id: 1,
        name: 'Real Estate Disputes',
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
        name: 'Labor & Employment',
    },
]



const PostCat = () => {
    const Category = blogCategories.map((item)=> (
		<Link key={item.id} to={`/blog-category/${item.name}`} className="flex justify-between w-10/12  gap-10 items-center  border border-slate-100 px-6 py-4 text-medium rounded-lg m-2 cursor-pointer hover:border-primary hover:border hover:bg-primaryLight/20 transition-all duration-300  ease-in-out">
			<p className="w-fit">{item.name}</p>
            <BiChevronRight />
		</Link>
    ))
            
  return (
    <>
  {Category}
    </>
  )
}

export default PostCat