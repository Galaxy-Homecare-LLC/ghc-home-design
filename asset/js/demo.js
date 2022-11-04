const arr = [
	{
		title: "Department of Human Services",
		quote: "Its purpose is to better enable the public to obtain criminal history record checks.",
	},
	{
		title: "Child Abuse Clearance",
		quote: "Its purpose is to better enable the public to obtain criminal history record checks.",
	},
	{
		title: "Access To Criminal History",
		quote: "Its purpose is to better enable the public to obtain criminal history record checks.",
	},
	{
		title: "Finger Print FBI-Identogo",
		quote: "Its purpose is to better enable the public to obtain criminal history record checks.",
	},
	{
		title: "Pennsylvania Department of Health",
		quote: "Its purpose is to better enable the public to obtain criminal history record checks.",
	},
	{
		title: "PennDOT Driver & Vehicle Services",
		quote: "Its purpose is to better enable the public to obtain criminal history record checks. ",
	},
	{
		title: "Community Health Choices",
		quote: "Its purpose is to better enable the public to obtain criminal history record checks.",
	},
	{
		title: "Senior Veteran’s Service Alliance",
		quote: "Its purpose is to better enable the public to obtain criminal history record checks.",
	},
	{
		title: "American Health Care Association",
		quote: "Its purpose is to better enable the public to obtain criminal history record checks.",
	},
	{
		title: "U.S. Department of Health & Human Services",
		quote: "Its purpose is to better enable the public to obtain criminal history record checks.",
	},

	{
		title: "Centers for Medicare & Medicaid Services (CMS)",
		quote: "Its purpose is to better enable the public to obtain criminal history record checks..",
	},
];

const cards = document.getElementById("resources");
cards.innerHTML = arr
	.map(
		(card) => `

    <article class="rounded-lg border bg-white  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer p-4 shadow-sm transition hover:shadow-lg sm:p-5">


            <h3 class="mt-0.5 text-lg font-inter font-medium text-slate-800 dark:text-slate-100">
                  ${card.title}
            </h3>




            <p class="mt-2 text-sm leading-relaxed  text-gray-500 dark:text-gray-400">
               ${card.quote}
            </p>

			<button class=' mt-2 text-blue-700 font-bold tracking-wider inline-flex items-center  '> <span class='inline-flex items-center  space-x-2'>Read more</span> <span class='ml-2'><i class="uil uil-external-link-alt"></i></span> </button>


    </article>
`,
	)
	.join("");
//

// for gellary
