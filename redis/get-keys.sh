#!/bin/bash

for key in $(redis-cli -p 6380 -a f9b4c9e0-ab6f-4c7b-b16c-1ecede145018 keys \*);
  do
    OUTPUT=$(redis-cli -p 6380 -a f9b4c9e0-ab6f-4c7b-b16c-1ecede145018 GET $key)
    echo "$key", "${OUTPUT}" >> redis_pairs.csv
done