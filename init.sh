# 서버 호스트 주소 또는 IP
SERVER_HOST="lshworkspace-was"
# 서버 포트 번호
SERVER_PORT=3000

while true; do
    if nc -z -w 1 "$SERVER_HOST" "$SERVER_PORT"; then
        # 서버가 열려 있으면
        echo "$SERVER_HOST:$SERVER_PORT is opened!"
        break
    else
        echo "$SERVER_HOST:$SERVER_PORT is closed. Waiting for opened."
        sleep 30
    fi
done

# 서버 호스트 주소 또는 IP
SERVER_HOST="lshworkspace-was"
# 서버 포트 번호
SERVER_PORT=3000

while true; do
    if nc -z -w 1 "$SERVER_HOST" "$SERVER_PORT"; then
        # 서버가 열려 있으면
        echo "[ INFO ] $SERVER_HOST:$SERVER_PORT is opened!"
        break
    else
        # 타이머 시작
        echo "[ ERROR ] $SERVER_HOST:$SERVER_PORT is closed."
        for ((i = 30; i > 0; i--)); do
            echo "Waiting for opened. Timer: $i seconds"
            sleep 1
        done
    fi
done
