# Data Model

## Job

- `id`
- `name`
- `phase`
- `priority`
- `dueDate`
- `assignedTeam`

## Material Request

- `id`
- `jobId`
- `status`
- `requestedBy`
- `neededBy`
- `items`

## Inspection

- `id`
- `jobId`
- `scheduledDate`
- `result`
- `notes`
