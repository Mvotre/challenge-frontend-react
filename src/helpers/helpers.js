export const helpers = {
    cutDescription: (description, limit) => {
        if(!description){
            return "No description found! :("
        }
        if(description.length > limit) {
            return description.slice(0, limit) + "..."
        }

        return description
    }
}