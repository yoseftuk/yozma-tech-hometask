export default function api<G>(
    input: RequestInfo,
    init?: RequestInit
): Promise<G> {
    return fetch(input, init)
        .then(async (res) => {
            const json = await res.json();
            if (res.status !== 200) {
                throw new Error(
                    json.message || 'some error occur, please try again later'
                );
            }
            return json as G;
        })
        .catch((e) => {
            throw new Error(e?.response?.message || e.message);
        });
}
