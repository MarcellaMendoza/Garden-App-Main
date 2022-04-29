const express = require("express")
const app = express()
const port = 3000

const {MongoClient} = require('mongodb')
const url = "mongodb+srv://mmendoza5:0nwfUC901zCrnRLM@cluster0.wjicg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const client = new MongoClient(url)


app.use(express.json())

app.use(express.static('public'))
app.use(express.static('public/homepage'))
app.use(express.static('public/locationpage'))
app.use(express.static('public/searchpage'))
app.use(express.static('public/teampage'))
app.use(express.static('public/images'))



app.get('/', (req, res) => {
	res.sendFile(__dirname + "/public/homepage/index.html")
})

app.get('/search', (req, res) => {
		res.sendFile(__dirname + "/public/searchpage/search.html")
})

app.get('/team', (req, res) => {
		res.sendFile(__dirname + "/public/teampage/team.html")
		})

app.get('/location', (req, res) => {
		res.sendFile(__dirname + "/public/locationpage/location.html")
		})


app.get('/api', (req, res) => {
	console.log("Reached the backend")
	const nameInput = req.query.plantName
	async function findPlant() {
		try {
			await client.connect()
			const collection = client.db('garden_db').collection('plants')
			// const cursorArr = await collection.find({name: nameInput}).toArray()
			const doc = await collection.findOne({name: nameInput})
			console.log(doc)
			res.send(doc)
		}
		catch(err) {
			console.log(err)
			res.sendStatus(400)
		}

	}
	findPlant()
	})



app.listen(port)







