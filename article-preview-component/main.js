const socialMediaBanner = document.querySelector(".card__social-media-banner")

function toggleBanner() {
    const classes = [...socialMediaBanner.classList]
    if (classes.includes("card__show-banner")) {
        socialMediaBanner.classList.remove("card__show-banner")
    } else {
        socialMediaBanner.classList.add("card__show-banner")
    }
}
