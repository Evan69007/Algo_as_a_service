const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.post('/', (req, res) => {
	let toSort = req.body.values
	let sort_order = req.body.sort_order
	let sorted
	switch (sort_order)
	{
		case "desc":
			sorted = sortDesc(toSort);
			break;
		case "asc":
			sorted = sortAsc(toSort);
			break;
		default:
			sorted = toSort;
			break;
	}
	res.json({"sorted_values": sorted})
})

function sortAsc(toSort)
{
	for(let i = 0; i < toSort.length - 1; i++)
	{
		for (let j = i + 1; j < toSort.length; j++)
		{
			if (toSort[i] > toSort[j])
			{
				let temp = toSort[i]
				toSort[i] = toSort[j]
				toSort[j] = temp
			}
		}
	}
	return (toSort)
}

function sortDesc(toSort)
{
	for(let i = 0; i < toSort.length - 1; i++)
	{
		for (let j = i + 1; j < toSort.length; j++)
		{
			if (toSort[i] < toSort[j])
			{
				let temp = toSort[i]
				toSort[i] = toSort[j]
				toSort[j] = temp
			}
		}
	}
	return (toSort)
}

app.listen(port, () => {
	console.log(`Server started on http://localhost:${port}`);
  });