enum Membership {
    Simple,
    Standart,
    Premium,
}

const membership = Membership.Standart;
const membershipReverse = Membership[2];

console.log(membership); // 1
console.log(membershipReverse); // Standart

enum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM',
}
