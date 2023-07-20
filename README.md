# Cash Register Manager

Welcome to the "Cash Register Manager" repository! This simple cash register manager calculates the amount to be returned to the customer and provides the breakdown of notes and coins to be returned.

## How to Use

1. Clone this repository to your local machine.
2. Open the `index.html` file in your web browser.
3. Input the bill amount (`billAmount`) and the amount received from the customer (`amountReceived`).
4. Click the "Calculate" button to see the amount to be returned and the number of notes/coins.

## Example

Suppose the bill amount is 535, and the customer pays with 600.

- Input Bill Amount: 535
- Input Amount Received: 600

After clicking the "Calculate" button, the application will display:

```
Amount to be Returned: 65

Breakdown:
0 x 2000.00
0 x 500.00
0 x 100.00
3 x 20.00
0 x 10.00
1 x 05.00
```

## How It Works

The cash register manager calculates the amount to be returned by subtracting the bill amount from the amount received. Then, it determines the optimal combination of notes and coins to return, minimizing the number of denominations used.

## How to Contribute

Contributions are welcome! If you have any ideas for improving the cash register manager or adding new features, feel free to open an issue or submit a pull request.
