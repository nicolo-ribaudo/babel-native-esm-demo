export default function* fn() {
    console.log(
        "function.sent: ",
        // This syntax is not supported by Node.js natively
        function.sent
    );
}
