import { connectDatabase, getAllDocuments, insertDocument } from "@/helpers/db-util"


const handler = async (req, res) => {
    const eventId = req.query.eventId

    let client

    try {
        client = await connectDatabase()
    } catch (error) {
        res.status(500).json({ message: 'Connecting to database failed' })
        return
    }

    if (req.method === 'POST') {
        const { name, email, text } = req.body


        if (!email || !email.includes('@') || name.trim() === '' || !name || text.trim() === '' || !text) {
            res.status(422).json({ message: 'Invalid input.' })
            return
        }


        const newComment = {
            email,
            name,
            text,
            eventId

        }

        let result

        try {
            result = await insertDocument(client, 'comments', newComment)
            newComment._id = result.insertedId
            res.status(201).json({ message: 'Added comment', comment: newComment })

        } catch (error) {
            res.status(500).json({ message: 'Inserting comments failed ' })
            return
        }





        // console.log(newComment)

    }

    if (req.method === 'GET') {


        try {
            const documents = await getAllDocuments(client, 'comments', { _id: -1 })
            res.status(201).json({ comments: documents })
        } catch (error) {
            res.status(500).json({ message: 'Getting comments failed' })
        }

        client.close()


        res.status(201).json({ comments: documents })
        console.log('comments', documents)
    }
}

export default handler