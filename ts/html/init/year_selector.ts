function enableYearSelector(league: League): void {
    const yearSelector = document.getElementById("available_seasons");
    league.settings.yearsActive.forEach((year) => {
        const option = document.createElement("option");
        option.text = year.toString();
        option.value = year.toString();
        if (option.value === league.season.toString()) {
            option.selected = true;
        }
        (yearSelector as HTMLSelectElement).add(option);
    });
}