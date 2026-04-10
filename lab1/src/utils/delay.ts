interface DelayParams {
    ms: number
}

export const delay = async (param: DelayParams): Promise<void> => {
    const { ms } = param

    return new Promise((resolve): void => {
        setTimeout(() => { resolve() }, ms)
    })
}
