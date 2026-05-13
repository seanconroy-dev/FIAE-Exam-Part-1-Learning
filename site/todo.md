# Todo: Frontend Integration (Persistent Backend)

- [ ] Store API key in `localStorage`
- [ ] Send `X-API-Key` header on all authenticated requests
- [ ] Do not send `userId` from frontend for any progress or session operation
- [ ] Start quiz session with only `{ "module": "..." }`
- [ ] Record answers with `{ "cardSlug": "...", "wasCorrect": true }`
- [ ] Call `POST /api/sessions/{id}/complete` on quiz finish
- [ ] Optionally show per-card: `last seen`, `times seen`, `times correct`, difficulty indicator
- [ ] Keep public card browsing working without any API key