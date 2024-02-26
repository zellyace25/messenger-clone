import React from "react";

function LeftNav() {
  return (
    <>
      <div className=" w-16 flex flex-col ">
        <div className="h-1/2 w-full flex flex-col  p-3 gap-5">
          <img src="https://seeklogo.com/images/C/chatcoin-chat-logo-D655A30A39-seeklogo.com.png" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="cursor-pointer  hover:bg-slate-200 rounded-lg p-2"
          >
            <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            className="cursor-pointer  hover:bg-slate-200 rounded-lg p-2"
          >
            <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className="cursor-pointer  hover:bg-slate-200 rounded-lg p-2"
          >
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
          </svg>
        </div>
        <div className="h-1/2  w-full  flex justify-center items-end p-4">
          <img
            src="https://scontent.fmnl3-1.fna.fbcdn.net/v/t39.30808-6/394595735_3243884699248759_4079995997966701998_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFxeZZScM3aiSVJkHpIMPCjN3fo-8KNa1k3d-j7wo1rWdkHqMn8opEvWSdoXCmzj9a04KXHUF8qCA4K_6CkIGOc&_nc_ohc=V5Vk6_DSdCQAX_VmROX&_nc_ht=scontent.fmnl3-1.fna&oh=00_AfDB_XBmXd5MoeMv3FdvVJSoS8dkxkWtQQi_u8FUGigtcA&oe=65D93F85"
            className="rounded-full"
          />
        </div>
      </div>
    </>
  );
}

export default LeftNav;
