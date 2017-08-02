import { Injectable } from '@angular/core'



@Injectable()
export class Data {

    getData() {
        return [

            {
                image: 'http://www.aaarentcars.com/sites/default/files/styles/image_vehicule_fullscreen/public/vehicule_images/rent_mercedes_s500_coupe.jpg?itok=nD-cnLWa',
                make: 'Mercedes',
                model: 'S500',
                description: 'The Mercedes-Benz S-Class, formerly known as Sonderklasse (German for "special class", abbreviated as "S-Klasse"), is a series of luxury flagship vehicles produced by the German automaker Mercedes-Benz, a division of German company Daimler AG. The S-Class designation for top-of-the-line Mercedes-Benz models was officially introduced in 1972 with the W116, and has remained in use ever since.',
                owner: 'John',
                owner_image: 'https://cdn.pixabay.com/photo/2015/07/09/22/04/man-838636_960_720.jpg',
                price: '96600',
                engine: '4.3',
                comments:
                [
                    'Closing Assist/Door Lock Issues Due to Pneumatic System Problems on Mercedes-Benz S500',
                    'Airmatic Pump Motor May Fail Due to Sticking Relay on Mercedes-Benz S500',
                    'Command, Voice Control, PSE, & Tele Aid Modules and CD Changers Are All Prone to Failure on Mercedes-Benz S500',
                ]
            },

            {
                image: 'https://www.ford.com/cmslibs/content/dam/vdm_ford/live/en_us/ford/nameplate/mustang/2017/collections/highlights/3-2/mst17_highlight_lg_design.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg',
                make: 'Ford',
                model: 'Mustang',
                description: "he Ford Mustang is an American automobile manufactured by Ford. It was originally based on the platform of the second generation North American Ford Falcon, a compact car.[1] The original 1962 Ford Mustang I two-seater concept car had evolved into the 1963 Mustang II four-seater concept car which Ford used to pretest how the public would take interest in the first production Mustang. The 1963 Mustang II concept car was designed with a variation of the production model's front and rear ends with a roof that was 2.7 inches shorter.[2] Introduced early on April 17, 1964,[3] (16 days after the Plymouth Barracuda) and thus dubbed as a 1964½ by Mustang fans, the 1965 Mustang was the automaker's most successful launch since the Model A.[4] The Mustang has undergone several transformations to its current sixth generation.",
                owner: 'Peter',
                owner_image: 'http://img.people-group.com/images/Leadership/anupam-mittal.jpg',
                price: '42995',
                engine: '5.0',
                comments:
                [
                    "Bought a 2015 EcoBoost convertible a month ago, understand can't count a 1976 Mustang II I bought after I got out of the Marine Corps and went back to school in Georgia. I was the prettiest car I've ever owned, after it went turned to sports cars, 3-MGBs, 1-MGC , 2 Fiats(124 Spyder and X1/9), an RX7 and 2 MX 5 Miatas always yearned for a Mustang convertible though. Retirement and a bad hip ment the end of standard shift and with it more luggage space",
                    "Good deal. Let's see some pics.",
                ]
            },

            {
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Citroen_ZX_front_20080118.jpg/1200px-Citroen_ZX_front_20080118.jpg',
                make: 'Citroen',
                model: 'zx',
                description: "It seems hard to imagine the Citroen family without an Escort-sized car, but the truth is that until 1991, the French concern didn't have one. The ZX changed all that and was an instant success in Britain. It heralded a new era of well-built, quality Citroen hatches; the larger Xantia and ultimately the latest Saxo have followed that tradition. Now, ZXs are plentiful on the used market and are a solid buy",
                owner: 'George',
                owner_image: 'https://s-media-cache-ak0.pinimg.com/736x/e4/bb/f8/e4bbf8da732e4b32b9c84afa8aee3faa--beautiful-men-faces-people-beautiful.jpg',
                price: '500',
                engine: '1.9',
                comments:
                [

                ]
            },

            {
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/1990_Opel_Vectra_GLS_%2819384050978%29.jpg/280px-1990_Opel_Vectra_GLS_%2819384050978%29.jpg',
                make: 'Opel',
                model: 'Vectra',
                description: "The Opel Vectra is a large family car that was engineered and produced by the German automaker Opel. In the United Kingdom, the car was sold under the Vauxhall marque as the Vauxhall Cavalier and later as the Vauxhall Vectra, from 1995 onwards. It has also been sold by Holden in Australasia as Holden Vectra, and by Chevrolet in Latin America as the Chevrolet Vectra.",
                owner: 'John',
                owner_image: 'https://cdn.pixabay.com/photo/2015/07/09/22/04/man-838636_960_720.jpg',
                price: '1000',
                engine: '2.1',
                comments:
                [
                    "modern cars are a bunch of shit,Sorry Opel.but this is true ! Stupid German engineers !﻿",
                    "My father had an opel vectra  and the crankshaft exploded?",
                ]
            },

            {
                image: 'http://car--reviews.com/images/fiat-doblo/fiat-doblo-14.jpg',
                make: 'Fiat',
                model: 'Doblo',
                description: 'The Fiat Doblò is a panel van and leisure activity vehicle produced by Italian automaker Fiat since 2000. It was unveiled at the Paris Motor Show in 2000.',
                owner: 'Ali',
                owner_image: 'https://s-media-cache-ak0.pinimg.com/736x/dd/59/6c/dd596c276c755eebfcbe4d9cf39a3635--arabian-people-world-cultures.jpg',
                price: '7495',
                engine: '1.9',
                comments:
                [
                    "It still has an ugly front end.﻿",
                ]
            },

            {
                image: 'https://s-media-cache-ak0.pinimg.com/originals/22/42/b8/2242b80432ec1b89c59f7e401a08ec08.jpg',
                make: 'Peugeot',
                model: 'Boxer',
                description: '',
                owner: 'Hans',
                owner_image: 'http://static5.businessinsider.com/image/5249c86d6bb3f76f0a67b071/warby-parkers-founder-there-are-2-reasons-why-people-leave-their-jobs.jpg',
                price: '23055',
                engine: '2.2',
                comments:
                [
                    "Don't understand why they even offer a manual. Just give it a 8-speed auto for economy right?﻿",
                    "love's millimeters as much as Rebecca loves bananas",
                    "I like noisy diesels , brilliant noise otherwise whats the point in a diesel other than better mpg",
                    "New Peugeot grille is hideous in my opinion. Manufacturers these days seem to be competing to make the biggest and ugliest grille possible. I mean look at the brand new Iveco Daily, what a dog xD﻿",
                    "citroen jumper have inside like boxer whos is cheater﻿",
                ]
            },

            {
                image: 'https://images.cdn.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/510111144067061600x1060_0.jpg?itok=xIK-S_1i',
                make: 'Lada',
                model: 'Niva',
                description: "The LADA 4x4, formerly called the Lada Niva (Russian: Лада Нива; Niva (нива) is the Russian word for crop field), is an off-road vehicle designed and produced by the Russian (former Soviet) manufacturer AvtoVAZ. It was also marketed as the Lada Sport in Iceland,[3] Lada Taiga in Austria, Bognor Diva in Uruguay, the Lada Cossack in the United Kingdom,[4] and is offered since 2009 on most markets as the LADA 4x4.",
                owner: 'Boris',
                owner_image: 'https://ichef-1.bbci.co.uk/news/660/cpsprodpb/A951/production/_92254334_6b0e8688-4738-466e-bb39-903409a8645a.jpg',
                price: '10990',
                engine: '1.6',
                comments:
                [
                    "Love you Russia.",
                    "нива настоящий внедорожник в отличие от западного говна на котором можно только в городе пантоваться",
                ]
            },

            {
                image: 'http://www.moibbk.com/images/audi-a4-1.jpg',
                make: 'Audi',
                model: 'A4',
                description: 'The Audi A4 is a line of compact executive cars produced since late 1994 by the German car manufacturer Audi, a subsidiary of the Volkswagen Group.',
                owner: 'Phil',
                owner_image: 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/contributor/2014/7/21/1405973586427/Greg-Jericho-R.png?w=300&q=55&auto=format&usm=12&fit=max&s=c51697b479ff2ef919b166910eb6c9fe',
                price: '44150',
                engine: '2.0',
                comments:
                [
                    "I'd take this A4 any day of the week. Especially when it hits the used and preowned market.",
                    "Hard to believe it took until dam 2017 to get a USB from audi ",
                    "Holy this car is so big",
                ]
            },

            {
                image: 'https://static.cargurus.com/images/site/2009/08/11/18/37/2008-toyota-corolla-pic-38909-1600x1200.jpeg',
                make: 'Toyota',
                model: 'Corolla',
                description: 'The Toyota Corolla is a line of subcompact and compact cars manufactured by Toyota. Introduced in 1966, the Corolla was the best-selling car worldwide by 1974 and has been one of the best-selling cars in the world since then. In 1997, the Corolla became the best selling nameplate in the world, surpassing the Volkswagen Beetle.[1] Toyota reached the milestone of 40 million Corollas sold over eleven generations in July 2013.[2] The series has undergone several major redesigns.',
                owner: 'Boris',
                owner_image: 'https://ichef-1.bbci.co.uk/news/660/cpsprodpb/A951/production/_92254334_6b0e8688-4738-466e-bb39-903409a8645a.jpg',
                price: '16000',
                engine: '1.8',
                comments:
                [
                    "Most people drive to commute.  Going from home to work and work to home.  Sitting in traffic driving over bad pot hole filled roads.  It isn't a wonder why most people want a numb car.  The last thing anyone needs after a long stressful day at work is the drive home to be harsh, bumpy, loud and droning."
                ]
            },

            {
                image: 'https://services.edmunds-media.com/image-service/media-ed/sharp/?quality=70&format=jpg:progressive&image=%2Fhonda%2Fcivic%2F2016%2Fevox%2F2016_honda_civic_sedan_lx_tds3_evox_8_500.jpg',
                make: 'Honda',
                model: 'Civic',
                description: "The Honda Civic is a line of small cars manufactured by Honda. Originally a subcompact, the Civic has gone through several generational changes, becoming both larger and more upmarket and moving into the compact car segment. EPA guidelines for vehicle size class stipulate a car having combined passenger and cargo room of 110 to 119.9 cubic feet (3,110 to 3,400 L) is considered a mid-size car",
                owner: 'Toby',
                owner_image: 'http://www.canadadrymotts.ca/smedia/www/2011/09/12/img-our-people-victor_115720423735.png',
                price: '19615',
                engine: '2.0',
                comments:
                [
                    "everyone in turbo civics seems to love bouncing on max revs for a bit before gear changes",
                    "God fucking bless that last hatch",
                    "See guys, these are sounds of a tuner, NOT A RICER",
                    "that first civic was fucking flying",

                ]
            }
        ]
    }
}

