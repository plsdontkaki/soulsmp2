const members = [
    { uuid: "ce47d2ad-6147-401e-a2a0-15d916e124e2", discord: "notjustbeni" },
    { uuid: "aa61e8a1-2462-48d2-986d-5d1108b7ff81", discord: "tiankrisz" },
    { uuid: "fa7f9b3b-61d0-470e-9c2e-9a02d6cf9e34", discord: "andis_969" },
    { uuid: "14611309-a3f5-4c80-8e29-1fd2d8eef410", discord: "mixerr3alt" },
    { uuid: "3cd7f125-d0ff-4aa6-883b-372b5186b71b", discord: "norbi6794" },
    { uuid: "aa3d752c-27d7-4702-b2d0-6169addd058e", discord: "lazarka0580" },
    { uuid: "8cb05898-b1e4-4f7c-950f-12ad4a9a1634", discord: "m4rk._.1" },
    { uuid: "1921e990-17ee-4521-995b-9b81a8c3c507", discord: "pizzawamper" },
    { uuid: "556b951a-b9a4-42cb-bb3b-85019b01c1f7", discord: "daniel_1_2012" },
    { uuid: "8e86d0b2-9a11-4c8f-9e30-08892363457a", discord: "erikrobi" },
    { uuid: "32b6a192-3e15-44ee-8a90-b24139def94a", discord: "akos0802_83744" },
    { uuid: "993f41ce-905c-41ca-9d58-561607d410d2", discord: "beniii0630" },
    { uuid: "07b53dd9-9c8c-4574-975f-b906e4c0a1a0", discord: "neongamer322" },
    { uuid: "c88d48ae-f7fc-4ea6-8419-3c5186e14beb", discord: "0kev01" },
    { uuid: "54575825-4f37-4dd5-8b7c-69388429ddcc", discord: ".fahuba" },
    { uuid: "7f4d189c-18e9-4f30-86ba-b379ef309ee7", discord: "marci1211291" },
    { uuid: "e4a5f257-96a3-4d5a-8692-6d4321da9f30", discord: "wtapdemon0131" },
    { uuid: "2b6bbefc-d157-402f-9e94-2d1320ecacd6", discord: "bence0096" },
    { uuid: "fa5f56b7-a5cd-4647-8a9e-263855c8adba", discord: "aron87249" },
    { uuid: "675fcdbe-7940-40a7-a3c9-c86621e4ca4c", discord: "chips.kiraly" },
    { uuid: "74a36318-20f2-4c7b-b289-cf73f18a3c49", discord: "ombi32" },
    { uuid: "9c6f5f38-652a-46e7-a381-319bf2f081a2", discord: "felix_88640" },
    { uuid: "8ef9118e-1922-4429-8173-489b75ddc4f2", discord: "ogati999" },
    { uuid: "1d66bf95-e805-48cb-a54f-382fb44175c6", discord: "csakrgyexyro" },
    { uuid: "8f2ffb4b-77ef-44f8-be18-9fd90e0a8ed0", discord: "csanad12344" },
    { uuid: "41b96244-0eed-42e0-be1e-d8964f0e4b4e", discord: "soligors_" },
    { uuid: "96e9e9a4-d051-417e-a661-9f75bf7a4d1e", discord: "d4v1dnot" },
    { uuid: "2befae9c-f432-4d97-935f-ef1ecbb4c002", discord: "daanix13" },
    { uuid: "cd27ce30-72c4-4408-bf67-5cbe4dcccb4b", discord: "doorsisten" },
    { uuid: "55fd18bd-9581-459b-a85e-d4f2f358e259", discord: "zoliahegyrol." },
    { uuid: "ddb25220-1da5-4982-93f9-afc05b4ecae1", discord: "cibalo" },
    { uuid: "707e71d9-55a6-4c0e-b2df-a5ccb104cfd5", discord: "vrdansk" },
    { uuid: "e5a99074-1213-4be9-9b96-4d70769f6ad6", discord: "korikplays." },
    { uuid: "93fc2921-0cc5-42ea-839f-4f8c98714366", discord: "krisi10" },
    { uuid: "ae171a6a-1e4d-4435-9e0f-a268279cb122", discord: "lorinc21" },
    { uuid: "370bf707-5057-4af9-a770-26a91e6f7c15", discord: "mate003591" },
    { uuid: "f3fa0d90-fc72-48bc-9c0e-2c3583dc7069", discord: "kenez_88" }
];

async function createMembers() {
    const grid = document.getElementById("membersGrid");

    grid.innerHTML = `
        <div class="loading">
            <h2>Tagok betöltése...</h2>
        </div>
    `;

    const cards = await Promise.all(
        members.map(async (member) => {
            let name = "Ismeretlen";

            try {
                const res = await fetch(`https://playerdb.co/api/player/minecraft/${member.uuid}`);
                const data = await res.json();

                if (data.success) {
                    name = data.data.player.username;
                }
            } catch (e) {
                console.error(member.uuid, e);
            }

            return `
                <div class="member-card">
                    <iframe
                        src="https://visage.surgeplay.com/full/300/${member.uuid}"
                        scrolling="no">
                    </iframe>

                    <p class="member-name">${name}</p>
                    <p class="member-dc">${member.discord}</p>
                </div>
            `;
        })
    );

    grid.innerHTML = cards.join("");
}

window.addEventListener("DOMContentLoaded", createMembers);