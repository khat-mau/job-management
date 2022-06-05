
import Search from '../../components/search/Search';
import Button from '../../components/button/Button';
const data = [
  { id: "U001", user: "Nguyen Van A", status: "Ban" },
  { id: "U001", user: "Nguyen Van A", status: "Unban" },
  { id: "U001", user: "Nguyen Van A", status: "Unban" },
  { id: "U001", user: "Nguyen Van A", status: "Ban" },
]
function ban() {
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <div className='px-8 py-6 mx-4 mt-6 mb-6 text-left w-4/5'>
        <div className='mb-10 w-full mx-auto mt-10 md:w-3/4'>
          <Search></Search>
        </div>

        <div>
          <div className='mb-5 text-[15px]'>
            <select className='form-select px-5 py-0 border border-solid border-gray-300'>
              <option value="grapefruit">tang</option>
              <option value="lime">giam</option>
            </select>
          </div>
          <table className='border border-collapse border-black table-fixed justify-center text-center w-full'>
            <thead className='bg-blue-800 h-auto text-white text-xl'>
              <tr>
                <th className='border border-black px-2 py-2'>ID</th>

                <th className='border border-black px-2 py-2'>User Name</th>
                <th className='border border-black px-2 py-2'>Status</th>
              </tr>
            </thead>
            <tbody className='text-lg'>
              {data.map((val, key) => {
                return (
                  <tr key={key}>
                    <td className='border border-black px-2 py-2'>{val.id}</td>
                    <td className='border border-black px-2 py-2'>{val.user}</td>
                    <td className='border border-black px-2 py-2'>
                      <div><Button className='h-5 w-5 mx-auto'><span>{val.status}</span></Button></div>
                      </td>

                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default ban;