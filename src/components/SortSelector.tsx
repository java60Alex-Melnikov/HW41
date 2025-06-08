import { Menu, Button, Portal } from "@chakra-ui/react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";
import sortOptions from "../../config/sort-config.json";
import MotionComponent from "./MotionComponent";
import useGameStore from "../store/gameStore";

export type SortOption = (typeof sortOptions)[0];

const duration = 0.7;
const SortSelector = () => {
  const selectedOrdering = useGameStore(state => state.gameQuery.ordering);
  const setOrdering = useGameStore(state => state.setOrdering);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <Menu.Root onExitComplete={() => setIsOpen(false)}>
        <Menu.Trigger asChild>
          <Button
            variant="outline"
            size="sm"
            borderWidth={0}
            onClick={() => setIsOpen(!isOpen)}
            marginBottom={3}
          >
            {` Order by ${selectedOrdering?.displayName || "Relevance"}`}
            {isOpen ? (
              <MotionComponent duration={duration}>
                <FaChevronUp />
              </MotionComponent>
            ) : (
              <FaChevronDown></FaChevronDown>
            )}
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <MotionComponent duration={duration}>
              <Menu.Content>
                {sortOptions.map((option) => (
                  <Menu.Item
                    key={option.value}
                    onClick={() => {
                      setOrdering(option);
                      setIsOpen(false);
                    }}
                    value={option.value}
                  >
                    {option.displayName}
                  </Menu.Item>
                ))}
              </Menu.Content>
            </MotionComponent>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </>
  );
};

export default SortSelector;
