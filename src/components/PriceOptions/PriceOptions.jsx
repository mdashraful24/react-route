import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    
    const priceOptions = [
        {
            id: 1,
            name: "Basic Membership",
            price: 20,
            currency: "USD",
            features: [
                "Access to gym equipment",
                "Locker room access",
                "1 fitness assessment per month"
            ]
        },
        {
            id: 2,
            name: "Standard Membership",
            price: 40,
            currency: "USD",
            features: [
                "Access to gym equipment",
                "Locker room access",
                "2 fitness assessments per month",
                "Group fitness classes",
                "Access to sauna"
            ]
        },
        {
            id: 3,
            name: "Premium Membership",
            price: 60,
            currency: "USD",
            features: [
                "Access to all gym equipment and areas",
                "Private locker",
                "Unlimited fitness assessments",
                "All group fitness classes",
                "Access to sauna and steam room",
                "1 free personal training session per month"
            ]
        },
        {
            id: 4,
            name: "VIP Membership",
            price: 100,
            currency: "USD",
            features: [
                "24/7 access to gym facilities",
                "Personal locker and laundry service",
                "Unlimited fitness assessments and personal training sessions",
                "Access to exclusive VIP lounge",
                "Access to spa, sauna, and steam room",
                "Monthly wellness consultation"
            ]
        },
        {
            id: 5,
            name: "Student Membership",
            price: 15,
            currency: "USD",
            features: [
                "Access to gym equipment",
                "Locker room access",
                "Discounted fitness classes",
                "Access to study-friendly lounge"
            ]
        },
        {
            id: 6,
            name: "Corporate Membership",
            price: 80,
            currency: "USD",
            features: [
                "Access to gym equipment",
                "Locker room access",
                "Monthly wellness workshops",
                "Discounted personal training sessions",
                "Group fitness classes"
            ]
        }
    ];

    return (
        <div className="m-12">
            <h2 className="text-5xl mb-8">Best Prices in the town</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;