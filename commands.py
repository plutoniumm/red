import sys
from time import sleep
import redpitaya_scpi as scpi

rp_s = scpi.scpi(sys.argv[1])

"""
LED:MMC - Orange LED | Memory Card LED
LED:HB - Red LED | Board Activity LED
LED:ETH - Ethernet LED
"""

def blink(interval:int, iters: int)->None:
  print("Blinking LED1")
  for _ in range(iters):
    sleep(interval)
    rp_s.tx_txt(f"DIG:PIN LED1,1")
    sleep(interval)
    rp_s.tx_txt(f"DIG:PIN LED1,0")

    print(f"Blinked", iters)