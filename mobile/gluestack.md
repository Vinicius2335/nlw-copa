# Custom Button + Hover

```` tsx
const StyledButton = styled(Button, {
  bg: "$primary600",
  px: "$6",
  py: "$4",
  ":hover": {
    bg: "$blue300",
  },
})

function MyComponent() {
  const [isHovered, setIsHovered] = useState(false)
  const [isActive, setIsActive] = useState(false)
  return (
    <StyledButton
      states={{ hover: isHovered, active: isActive }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
    >
      Click Me
    </StyledButton>
  )
}
````

# Forma de aproveitar os styles do GlueStack

- `const resolvedGreen = useToken("colors", "green500")`


Component Option é um bom exemplo de usar {...rest}.   
Todos os componentes herdam as props do react-native.