function minRewardsOptimal(scores) {
    const rewards = new Array(scores.length).fill(1)

    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > scores[i - 1]) rewards[i] = rewards[i - 1] + 1
    }
    for (let i = scores.length - 2; i > -1; i--) {
        if (scores[i] > scores[i + 1]) rewards[i] = Math.max(rewards[i], rewards[i + 1] + 1)
    }

    return rewards.reduce((acc, curr) => acc + curr)
}

function minRewards(scores) {
    let rewards = new Array(scores.length).fill(1)

    for (let current = 0; current < scores.length; current++) {
        let prev = current - 1
        if (scores[prev] < scores[current]) {
            rewards[current] = rewards[prev] + 1
        } else {
            while (prev >= 0 && scores[prev] > scores[prev + 1]) {
                rewards[prev] = Math.max(rewards[prev], rewards[prev + 1] + 1)
                prev--
            }
        }
    }

    return rewards.reduce((acc, curr) => acc + curr)
}