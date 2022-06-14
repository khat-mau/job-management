
import Search from '../../components/search/Search';
import Button from '../../components/button/Button';
import Wrapper from '../../components/layout/defaultLayout/wrapper/Wrapper';
const data = [
  { id: "U001", user: "Nguyen Van A", status: "Ban" },
  { id: "U001", user: "Nguyen Van A", status: "Unban" },
  { id: "U001", user: "Nguyen Van A", status: "Unban" },
  { id: "U001", user: "Nguyen Van A", status: "Ban" },
]
function Ban() {
  return (
    <Wrapper className="bg-[#EDEDED] "
                content=" flex justify-center "
       >
    <div className='flex flex-col items-center justify-center w-full'>
      <div className='text-left w-full md:w-4/5'>
        <div className='my-10 mx-auto max-w-fit'>
          <Search></Search>
        </div>
        <div>
          <div className='mb-5 text-[15px]'>
            <select className='form-select px-5 py-0 border border-solid border-gray-300'>
              <option value="grapefruit">tang</option>
              <option value="lime">giam</option>
            </select>
          </div>
          <table className='border border-collapse border-black table-fixed mb-10 text-center w-full text-xs md:text-base'>
            <thead className='bg-blue-800 h-auto text-white text-lg'>
              <tr>
                <th className='border border-black px-2 py-2'>ID</th>
                <th className='border border-black px-2 py-2'>User Name</th>
                <th className='border border-black px-2 py-2'>Status</th>
              </tr>
            </thead>
            <tbody >
              {data.map((val, key) => {
                return (
                  <tr key={key}>
                    <td className='border border-black px-2 py-2'>{val.id}</td>
                    <td className='border border-black px-2 py-2'>{val.user}</td>
                    <td className='border border-black px-2 py-2'>
                      <Button className='h-2 w-2 mx-auto'><span>{val.status}</span></Button>
                      </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </Wrapper>
  );
}
export default Ban;