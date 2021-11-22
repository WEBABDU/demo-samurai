export const requared = (value) => {
    if(value) return undefined
    return 'Field is requared'
}
export const maxLengthCreator = (maxLength) => (value) => {
    if(value.length > maxLength) return `max symbols is ${maxLength}`
    return undefined
}
