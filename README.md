# Campus Events behind Nginx

A small Node.js API and an Nginx reverse proxy. Nginx is the only service published to your laptop.

```
Browser -> 127.0.0.1:8091 -> nginx (port 80) -> app (port ?)
```

## Files

| File | What it is |
| --- | --- |
| `compose.yaml` | Two services: `app` (not published) and `nginx` (published on 8091) |
| `app/server.js` | The Campus Events API: `/health` and `/api/events` |
| `nginx/nginx.conf` | The Nginx site config. It has two `TODO`s for you to complete. |
| `scripts/teammate-change.sh` | Used in Task 3 of the assignment |

## Start

```bash
docker compose up -d --build
docker compose ps -a
```

Until you complete the `TODO`s, Nginx stops straight away with `host not found in upstream "TODO"`.

## Useful commands

| Command | What it shows |
| --- | --- |
| `docker compose logs nginx` | Nginx errors |
| `docker compose logs app` | The port the app listens on, and every request it receives |
| `docker compose exec nginx nginx -t` | Checks `nginx.conf` for mistakes |
| `docker compose exec nginx nginx -s reload` | Loads the edited `nginx.conf` without stopping Nginx |

On Windows PowerShell, use `curl.exe` instead of `curl`.

## Stop

```bash
docker compose down
```
