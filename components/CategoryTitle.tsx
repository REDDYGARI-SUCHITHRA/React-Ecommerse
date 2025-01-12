function CategoryTitle({ title }: { title: string }) {
    return (
        <div className="flex mt-6 gap-2">
            <div className="bg-red-500 w-3 h-7"></div>
            <div className="text-md font-bold text-red-500">{title}</div>
        </div>
    );
}

export default CategoryTitle;
