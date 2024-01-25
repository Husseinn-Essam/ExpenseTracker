
export default function Sidebar() {
  return (
    <div className='rounded-2xl h-3/4 ml-5 mt-5 flex h-full content-center flex-col w-1/6 gap-5 bg-base-200 shadow-xl'>
          <div className="avatar flex flex-row gap-2 mt-5 ml-5 rounded-2xl">
            <div className="flex flex-row w-12 h-12 rounded-2xl">
                <img src="https://th.bing.com/th/id/R.05208c284fe4c902f5be6b8dde947b5f?rik=q01m42bpKHRVfA&pid=ImgRaw&r=0" />
            </div>
                        
            <div className="flex flex-col">
                    <p className="font-bold">Hello, User!</p>
                    <p>Financial app</p>
                </div>      
        </div>
        <div className=" flex flex-col gap-5 mt-4">
            <button className=' btn glass h-2'>Dashboard</button>
            <button>Income</button>
            <button>Expenses</button>
            <button>Accounts</button>
        </div>
    </div>
  )
}
