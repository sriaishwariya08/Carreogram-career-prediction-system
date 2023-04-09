import doctor from "../assets/doctor.jpg"
import engineer from "../assets/engineer.jpg"
import lawer from "../assets/lawer.jpg"
import fashion from "../assets/fashion.jpg"
import baker from "../assets/baker.jpg"

const ProjectCardData=[
    {
        imgsrc: doctor,
        title: "Doctor",
        text: "By becoming a doctor, you take away the pain and sufferings of others by giving them medical treatment and healthcare. As a doctor, you are a continuous source of happiness for many people and their families.",
        view :"http://localhost:3000/Doctor",
    },
    {
        imgsrc: engineer,
        title: "Engineer",
        text: "Engineers are motivated by the challenge and gratification they get from overcoming that challenge, they are motivated by making their own decisions, solving problems in their way and having the time to master what they do.",
        view: "http://localhost:3000/Engineer",
    },
    {
        imgsrc: lawer,
        title: "Lawyer",
        text: "Lawyer, one trained and licensed to prepare, manage, and either prosecute or defend a court action as an agent for another and who also gives advice on legal matters that may or may not require court action.",
        view: "http://localhost:3000/Lawyer"
    },
    {
        imgsrc: fashion,
        title: "Fashion Designer",
        text: "Fashion designers create all of the apparel and accessories sold worldwide each year.They set the trend for some period drawing the fashionista’s attention locally and globally.",
        view: "http://localhost:3000/FD"
    },
    {
        imgsrc: baker,
        title: "Baker",
        text: "Baker is a person who bakes goods like bread, pie, cake etc and also responsible for preparing and experimenting with dishes, decorating cakes and measuring ingredients.",
        view: "http://localhost:3000/Baker"
    },
];
export default ProjectCardData;