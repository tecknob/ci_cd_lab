fetch("https://api.github.com/graphql", {
	method: "GET",
	headers: {
		"Content-Type": "application/json",
		Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
	},
})
	.then((res) => res.json())
	.then((json) => {
		console.log(json);
	});
