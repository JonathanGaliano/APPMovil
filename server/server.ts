import express from 'express';

const app = express();

app.use(express.json());


const data: Array<{}> = [

        {
        id: "1",
        profilePicture:
            "https://social-links-profile-main-henna.vercel.app/_next/image?url=%2Fassets%2Fimages%2Favatar-jessica.jpeg&w=3840&q=75",
        image: "Jessica Randall ",
        profileName: "London, United Kingdom",
        Description: "Front-enddeveloper and avid reader"
    },
    // {
    //     id: "1",
    //     profilePicture:
    //         "https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-1/302899535_1243389203080396_8459184593115578454_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Lv7BBW2HCeAAb7A_P0-&_nc_ht=scontent-mia3-1.xx&oh=00_AfC9qs4YAVWYMmAodmVRPMR6eBSsugeFMg64qtqeZIURDw&oe=661F9E99",
    //     image: "computer.png",
    //     profileName: "Eliseo",
    // },


    // {
    //     id: "2",
    //     profilePicture: "jhonatan.jpg",
    //     image: "teclado.png",
    //     profileName: "Jhonatan",
    // },

    // {
    //     id: "3",
    //     profilePicture: "diogenes.jpg",
    //     image: "zapatos.png",
    //     profileName: "Diogenes Mojica",
    // },

    // {
    //     id: "4",
    //     profilePicture:
    //         "https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-1/421878086_3662415144076963_6469529258262461884_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=UY8yJSqfSVcAb5g9eid&_nc_ht=scontent-mia3-1.xx&oh=00_AfCqjsXowH5Wi1rpQzL30OjY1IT1Hv6JlRnPU-WyL22uHA&oe=661F9A5E",
    //     image: "Planca.png",
    //     profileName: "Johana",
    // },

    // {
    //     id: "5",
    //     profilePicture:
    //         "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F325666616814477834%2F&psig=AOvVaw26YXLShcwSzgE4NoUK3TrZ&ust=1713469435800000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPDyxJSByoUDFQAAAAAdAAAAABAE",
    //     image: "peluche.png",
    //     profileName: "pocoyo",
    // },
];

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));



app.get('/', async (req, res) => {
    await wait(3001);
    res.json(data);
});


app.post('/posts', (req, res) => {
    const { profilePicture = "", image = "", profileName = "" } = req.body;

    console.log('saving new data: ', { profilePicture, image, profileName });

    data.push({
        id: data.length.toString(),
        profilePicture,
        image,
        profileName,
    });

    res.json(data);
});


app.listen(3001, () => {
    console.log('Server is running on port 3001');
});