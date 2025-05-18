export default function Filter(){
    return(
        <div className="flex text-center justify-center mt-10 mr-10 ml-10">
            <select defaultValue="Filter by Category" className="select select-primary mr-2">
            <option disabled={true}>Filter by Category</option>
            <option>VScode</option>
            <option>VScode fork</option>
            <option>Another VScode fork</option>
            </select>
            <select defaultValue="Filter by Author" className="select select-primary">
            <option disabled={true}>Filter by Author</option>
            <option>VScode</option>
            <option>VScode fork</option>
            <option>Another VScode fork</option>
            </select>
        </div>
    )
}