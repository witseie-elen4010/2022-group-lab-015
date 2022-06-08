# ADR4: Using SQL server and sockets for communications between two clients in multipliplayer mode

## Decision

It was decided that using sockets was more efficient compared to polling SQL server database when facilitating communications
between clients.

## Status

Accepted

## Consequences

Using sockets proved to be a steep learning curve and required careful management of transmission of data between multiple clients.
   