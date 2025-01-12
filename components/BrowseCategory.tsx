import CategoryTitle from "./CategoryTitle";
import CategoryType from "./CategoryType";
function BrowseCategory() {
  return (
    <div>
      <CategoryTitle title="Categories" />
      <div className="text-2xl font-bold mt-4">Browse By Categories</div>
      <div className="mt-4 h-60 w-60"><CategoryType /></div>
      
    </div>
  )
}

export default BrowseCategory
