const images = [
  {
    img: "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1582560469781-1965b9af903d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1093&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1576765608741-911f44c98546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=690&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1587500154541-1cafd74f0efc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1550831106-0994fe8abcfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },

  {
    img: "https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  },
  {
    img: "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

const imgGellary = document.getElementById("gellary");
imgGellary.innerHTML = images
  .map(
    (img) =>
      `
		<div class="group relative rounded-lg mb-3 cursor-pointer overflow-hidden">
         <img class="w-full object-cover rounded-lg group-hover:scale-105 duration-300" src=${img.img} />
            <div class="absolute top-0 left-0 w-full h-0 rounded-lg flex flex-col justify-center items-center bg-black/50 opacity-0 group-hover:h-full group-hover:opacity-100 duration-300">
            <h2 class="text-xl font-semibold tracking-wide text-white">Price ceremony in the hotel</h2>
            <h3 class='text-purple-400 mt-2'> Share this link via</h3>
             <div class="flex items-center gap-3 text-white text-xl mt-1">
                           <a title='facebook' href="" class="cursor-pointer hover:text-[#2377F3] duration-300">
                              <i class="fa-brands fa-facebook "></i>
                           </a>
                           <a href="" class="cursor-pointer hover:text-[#1C77B5] duration-300">
                              <i class="fa-brands fa-linkedin-in"></i>
                           </a>
                           <a href="" class="cursor-pointer hover:text-[#29A1F2] duration-300">
                              <i class="fa-brands fa-twitter"></i>
                           </a>
                        </div>
         </div>
      </div>

		`
  )
  .join("");
const fast = document
  .getElementById("gellary")
  .addEventListener("click", () => {
    console.log("click");
  });
