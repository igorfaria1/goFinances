const formatDate = (date: Date): string  => {
    date = new Date(date);
    const dateFormated = Intl.DateTimeFormat('pt-BR', {timeZone: 'UTC'});
    return dateFormated.format(date);
}

export default formatDate;