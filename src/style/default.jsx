export default {
    // Temp fonts
    fonts: {
        title: "Monument Extended, Open Sans, sans-serif",
        main: "Monument Extended, Open Sans, sans-serif",
        header: "PP Neue Montreal, sans-serif",
    },
    // Colors for layout
    colors: {
        primary1: "hsl(204,23.8%,95.9%)",
        background1: "#0B0B0B",
        border: "linear-gradient(180deg, rgba(69,20,125,1) 0%, rgba(248,78,182,1) 50%, rgba(69,20,125,1) 100%);",
        borderLeft: "linear-gradient(90deg, rgba(69,20,125,1) 0%, rgba(248,78,182,1) 50%, rgba(69,20,125,1) 100%);",
        title: "linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%)",
        button: "hsl(205.1,100%,36.1%)",
        background2: "#18181B",
        link: "#18C5DD"
    },
    // Breakpoints for responsive design
    breakpoints: {
        xs: 'screen and (max-width: 450px)', // Smartphones très petits ou compacts
        sm: 'screen and (max-width: 640px)', // Smartphones standards
        md: 'screen and (max-width: 768px)', // Petites tablettes ou tablettes standard en mode portrait
        lg: 'screen and (max-width: 1024px)', // Grandes tablettes en mode paysage, petites tablettes en mode portrait
        xl: 'screen and (max-width: 1280px)', // Grandes tablettes en mode paysage, petits ordinateurs portables
        xlmaispastrop: 'screen and (max-width: 1430px)',
        xxl: 'screen and (max-width: 1740px)',
    }
}