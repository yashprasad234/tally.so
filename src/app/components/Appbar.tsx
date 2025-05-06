

export default function Appbar() {
  return (
    <div className="flex justify-between items-center p-4" >
        <h2 className="text-2xl font-black" >tally*</h2>
        <div className="flex gap-4 text-sm items-center">
            <div>Pricing</div>
            <div>Log in</div>
            <div>Sign up</div>
            <div className="bg-sky-500 px-2 py-1 rounded-sm text-white" >Create form</div>
        </div>
    </div>
  )
}
