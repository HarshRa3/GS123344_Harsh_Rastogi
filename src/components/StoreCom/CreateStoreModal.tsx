import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  TextField,
  MenuItem,
  Stack,
  IconButton,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { addStore } from "../../redux/slices/rootSlice";

const states: string[] = ["California", "Texas", "New York"];
const cities: Record<string, string[]> = {
  California: ["Los Angeles", "San Francisco"],
  Texas: ["Houston", "Dallas"],
  "New York": ["New York City", "Buffalo"],
};

interface FormData {
  store: string;
  state: string;
  city: string;
}

const CreateStoreModal: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const dispatch=useDispatch()
 

  const selectedState = watch("state");

  const onSubmit = (data: FormData) => {
    const uniqueId = `store-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
    dispatch(addStore({ ...data, id: uniqueId }));
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        sx={{
          bgcolor: "#FF7043",
          width: "160px",
          color: "white",
          mt: 2,
          fontWeight: "bold",
          borderRadius: 2,
          "&:hover": { bgcolor: "#F4511E" },
        }}
      >
        + New Store
      </Button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 420,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h6" fontWeight="bold">
              Create Store
            </Typography>
            <IconButton onClick={() => setOpen(false)} size="small">
              <CloseIcon />
            </IconButton>
          </Stack>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <Controller
                name="store"
                control={control}
                rules={{ required: "Store name is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Store Name"
                    variant="outlined"
                    fullWidth
                    error={!!errors.store}
                    helperText={errors.store?.message}
                  />
                )}
              />

              <Controller
                name="state"
                control={control}
                rules={{ required: "State is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    label="Select State"
                    variant="outlined"
                    fullWidth
                    error={!!errors.state}
                    helperText={errors.state?.message}
                  >
                    {states.map((state) => (
                      <MenuItem key={state} value={state}>
                        {state}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />

              <Controller
                name="city"
                control={control}
                rules={{ required: "City is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    label="Select City"
                    variant="outlined"
                    fullWidth
                    error={!!errors.city}
                    helperText={errors.city?.message}
                    disabled={!selectedState}
                  >
                    {selectedState &&
                      cities[selectedState]?.map((city) => (
                        <MenuItem key={city} value={city}>
                          {city}
                        </MenuItem>
                      ))}
                  </TextField>
                )}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  mt: 2,
                  bgcolor: "#FF7043",
                  fontWeight: "bold",
                  borderRadius: 2,
                  "&:hover": { bgcolor: "#F4511E" },
                }}
              >
                Submit
              </Button>
            </Stack>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default CreateStoreModal;
